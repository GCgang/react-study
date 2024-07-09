import { useSetRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import {
  countiresState,
  eCountryStatus,
  ICountry,
} from '../state/countiresState';

interface IForm {
  country: string;
}
export default function AddCountry() {
  const setCountries = useSetRecoilState(countiresState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    const newCountry: ICountry = {
      country: data.country,
      status: eCountryStatus.TO_VISIT,
    };
    console.log(newCountry);
    setCountries((oldContries) => [...oldContries, newCountry]);
    setValue('country', '');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="이름"
        {...register('country', {
          required: 'required',
        })}
      />
      {errors.country && <div>{errors.country.message}</div>}
      <button>Go</button>
    </form>
  );
}
