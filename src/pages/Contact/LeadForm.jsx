import { MdOutlineEmail } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { FaRegStickyNote } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import PhoneNumber from 'libphonenumber-js';
import toast from 'react-hot-toast';
import axios from 'axios';

import ErrMsg from './ErrMsg';

const LeadForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/action/lienhe', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        toast.success('Gửi liên hệ thành công');
        reset();
      } else {
        toast.error('Gửi liên hệ thất bại');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const isValidPhoneNumber = (value) => {
    try {
      const phoneNumber = PhoneNumber(value, 'VN');
      return phoneNumber.isValid();
    } catch (error) {
      return false;
    }
  };

  return (
    <form className='lead-form' onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <label
        className={`input input-bordered my-2 flex items-center gap-2 ${errors.fullName && 'border-red-500'}`}
      >
        <FaRegUser />
        <input
          type='text'
          className='grow'
          placeholder='Nhập họ tên'
          {...register('fullName', {
            required: 'Họ tên không được để trống',
            maxLength: {
              value: 30,
              message: 'Họ tên không được quá 30 ký tự',
            },
          })}
          aria-invalid={errors.fullName ? 'true' : 'false'}
        />
      </label>
      {errors.fullName && <ErrMsg msg={errors.fullName.message} />}

      {/* Email */}
      <label
        className={`input input-bordered my-2 flex items-center gap-2 ${errors.email && 'border-red-500'}`}
      >
        <MdOutlineEmail />
        <input
          type='text'
          className='grow'
          placeholder='Nhập email'
          {...register('email', {
            required: 'Email không được để trống',
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Email không hợp lệ',
            },
          })}
        />
      </label>
      {errors.email && <ErrMsg msg={errors.email.message} />}

      {/* Phone */}
      <label
        className={`input input-bordered my-2 flex items-center gap-2 ${errors.phone && 'border-red-500'}`}
      >
        <FaPhoneAlt />
        <input
          type='text'
          className='grow'
          placeholder='Nhập SĐT'
          {...register('phone', {
            required: 'Số điện thoại không được để trống',
            validate: {
              isValidPhoneNumber: (value) =>
                isValidPhoneNumber(value) || 'Số điện thoại không hợp lệ',
            },
          })}
        />
      </label>
      {errors.phone && <ErrMsg msg={errors.phone.message} />}

      {/* Title */}
      <label
        className={`input input-bordered my-2 flex items-center gap-2 ${errors.title && 'border-red-500'}`}
      >
        <FaRegStickyNote />
        <input
          type='text'
          className='grow'
          placeholder='Nội dung cần tư vấn'
          {...register('title', {
            required: 'Nội dung không được để trống',
            maxLength: {
              value: 100,
              message: 'Nội dung không được quá 100 ký tự',
            },
          })}
        />
      </label>
      {errors.title && <ErrMsg msg={errors.title.message} />}

      {/* Details */}
      <textarea
        placeholder='Chi tiết nội dung cần tư vấn...'
        className={`textarea textarea-bordered textarea-sm my-2 min-h-36 md:min-h-48 w-full ${errors.content && 'border-red-500'}`}
        {...register('content', { required: true })}
      ></textarea>
      {errors.content && <ErrMsg msg='Nội dung không được để trống' />}

      {/* Submit */}
      <button
        type='submit'
        className='btn my-2 w-full bg-fus-brand text-main-white hover:bg-fus-brand/80'
      >
        Gửi liên hệ
      </button>
    </form>
  );
};

export default LeadForm;
