
import { useForm } from '@tanstack/react-form';
import { z } from 'zod'



const formSchema = z.object({
	fullname: z.string().min(5).max(100),
	email: z.string().email("invalid email address").min(5),
	password: z
		.string()
		.min(4)
		.regex(/[A-Z]/, "password must contain atleast one upper case")
		.regex(/[a-z]/, "password must contain atleast one lower case")
		.regex(/\d/, "password must contain atleast one number"),
});
type FormData = z.infer<typeof formSchema>
//fuction to valdate with zod
function validateField<T>(value: T, schema: z.ZodType<T>) {
	const result = schema.safeParse(value);

    if (!result.success) {
        return result.error.issues[0]?.message || 'validation error';
        
    }
}
function Tanstackform() {
const form =useForm({
    defaultValues: {
        fullname: '',
        email: '',
        password: '',
    }as FormData,
    onSubmit: async ({value}) => {
        const result = formSchema.safeParse(value)
        if (!result.success) {
           console.error('validation failed: ', result.error.issues)
           return
        }
        console.log('form submitted succefully:', value)
        alert('form submmision success 😎')
        form.reset()
    }
})
  return (
		<div className="max-w-md mx-auto p-6 bg-amber-100 shadow-lg rounded-lg">
			<h2 className="text-2xl font-bold mb-6 tex-gray-800 text-center">
				Tanstackform
			</h2>
			<form
				className="space-y-4"
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				<form.Field
					name="fullname"
					validators={{
						onChange: ({ value }) =>
							validateField(value, formSchema.shape.fullname),
						onBlur: ({ value }) =>
							validateField(value, formSchema.shape.fullname),
					}}
					children={(field) => (
						<div>
							<label htmlFor={field.name}>fullname</label>
							<input
								type={field.name}
								id={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
							/>
							{field.state.meta.errors.length > 0 && (
								<p>{String(field.state.meta.errors[0])}</p>
							)}
						</div>
					)}
				/>
                {/* submit */}
                <div className='pt-4'>
                    <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                    children= {([canSubmit, isSubmitting]) => (
                        <button
                        type='submit'
                        disabled={!canSubmit}
                        >
                            {isSubmitting ? 'submitting...' : 'sign Up'}
                        </button>
                    )}
                    />
                </div>
			</form>
		</div>
	);
}

export default Tanstackform