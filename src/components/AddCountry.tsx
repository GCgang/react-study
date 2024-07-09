import { useForm } from 'react-hook-form';

interface IForm {
  country: string;
}

export default function AddCountry() {
  return (
    <form>
      <input type="text" placeholder="이름" />
      <button>Go</button>
    </form>
  );
}
