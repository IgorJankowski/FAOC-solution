import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export interface IAddStockModalType {
    onSave: (data: FormData) => void;
    onClose: () => void;
}

// Validation Schema
const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    id: z.number().min(1, "ID must be a positive number"),
    amount: z.number().min(1, "Amount must be at least 1"),
    profit: z.number(),
});

type FormData = z.infer<typeof schema>;

export default function AddStockModal({ onSave, onClose }: IAddStockModalType) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FormData) => {
        onSave(data);
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add Stock Record</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Name</label>
                        <input {...register("name")} className="form-control" />
                        {errors.name && (
                            <p className="error">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label>ID</label>
                        <input
                            type="number"
                            {...register("id", { valueAsNumber: true })}
                            className="form-control"
                        />
                        {errors.id && (
                            <p className="error">{errors.id.message}</p>
                        )}
                    </div>

                    <div>
                        <label>Amount</label>
                        <input
                            type="number"
                            {...register("amount", { valueAsNumber: true })}
                            className="form-control"
                        />
                        {errors.amount && (
                            <p className="error">{errors.amount.message}</p>
                        )}
                    </div>

                    <div>
                        <label>Profit</label>
                        <input
                            type="number"
                            {...register("profit", { valueAsNumber: true })}
                            className="form-control"
                        />
                        {errors.profit && (
                            <p className="error">{errors.profit.message}</p>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="btn btn-secondary"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-success">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
