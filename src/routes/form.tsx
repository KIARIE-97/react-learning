import React, { useState } from 'react'

interface FormData{
  fullname: string;
  email: string;
  password: string;
  agreeToTerms: boolean;
}
  

function Form() {
	const [formData, setFormData] = useState<FormData>({
		fullname: "",
		email: "",
		password: "",
		agreeToTerms: false,
	});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const {name, value, type, checked} = e.target;

  setFormData((prev) => ({
    ...prev, [name]: type ==='checked' ? checked : value
  }))
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
console.log('form submitted:', formData)
};

  return (
		<div>
			<h2>signup</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="fullname"> fullname</label>
					<input
						type="text"
						id="fullname"
						name="fullname"
						placeholder="enter your fullname"
						value={formData.fullname}
						onChange={handleInputChange}
						className="w-full px-3 py-4 border border-gray-400 rounded-b-md"
					/>
				</div>
				<div>
					<label htmlFor="email"> Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						placeholder="enter your email address"
						className="w-full px-3 py-4 border border-gray-400 rounded-b-md"
					/>
				</div>
				<div>
					<label>
						<input
							type="checkbox"
							name="agree to terms"
							checked={formData.agreeToTerms}
							onChange={handleInputChange}
						/>
					</label>
					<div className="pt-4">
						<button
							type="submit"
							className="w-full py-2 px-4 rounded-md font-medium transition-colors"
						>
							sign Up
						</button>
					</div>
				</div>
			</form>
      <div>
        <pre className='text-xs overflow-auto max-h-40 text-gray-400'>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
		</div>
	);
}

export default Form