import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function  DriverForm ({onAddDriver}) {
  const {
    control,
    handleSubmit,
    formState: { errors },setValue,
  } = useForm(
    {
        defaultValues: {
            firstName: '',
            lastName: '',
            Address: '',
            Contact_Number: '',
            cnic: '',

        },
    });

  const onSubmit = (data) => {
    onAddDriver(data); // Notify the parent component with the new driver data
    setValue('firstName', ''); 
    setValue('lastName', ''); // Clear the input field after submission
    setValue('Address', ''); 
    setValue('Contact_Number', '');
    setValue('cnic', '');
   
    
  };

  return (
    <div>
      <h2>React Form with Validation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: 'First Name is required' }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: 'Last Name is required' }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label>Address:</label>
          <Controller
            name="address"
            control={control}
            defaultValue=""
            rules={{ required: 'Address is required' }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors.address && <p>{errors.address.message}</p>}
        </div>
        <div>
          <label>Contact Number:</label>
          <Controller
            name="contactNumber"
            control={control}
            defaultValue=""
            rules={{ required: 'Contact Number is required' }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors.contactNumber && <p>{errors.contactNumber.message}</p>}
        </div>
        <div>
          <label>CNIC:</label>
          <Controller
            name="cnic"
            control={control}
            defaultValue=""
            rules={{ required: 'CNIC is required' }}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors.cnic && <p>{errors.cnic.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DriverForm; 