import { ChangeEvent, FC } from 'react';
import { useForm } from 'react-hook-form';

import RadioButton from '@/components/UI/forms/RadioButton';
import Textarea from '@/components/UI/forms/Textarea';
import Button from '@/components/UI/forms/Button';
import Input from '@/components/UI/forms/Input';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setNotes, setRadioValue } from '@/store/reducers/primaryReducer';

import { RadioValue } from '@/types/RadioValue';
import { InputForm } from '@/types/InputForm';

import { generateDiscountCode } from '@/utils/generateDiscountCode';
import { discountCodePattern } from '@/utils/constants';

const CardSettings: FC = () => {
  const dispatch = useAppDispatch();

  const { radioValue, notes } = useAppSelector((state) => state.primary);

  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<InputForm>({
    mode: 'onChange',
  });

  const handleRadioOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRadioValue(e.target.value as RadioValue));
  };

  const handleTextareaOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNotes(e.target.value));
  };

  const generateCode = () => {
    const newDiscountCode = generateDiscountCode();
    setValue('discountCode', newDiscountCode);
    trigger();
  };

  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
          Enter Information
        </h6>

        <div className="relative w-full mb-6 flex flex-wrap gap-3">
          {Object.values(RadioValue).map((item) =>
            <RadioButton
              label={`Option ${item.toUpperCase()}`}
              value={item}
              name="group"
              checked={radioValue === item}
              onChange={handleRadioOnChange}
            />
          )}
        </div>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 mb-3">
            <Input
              label="Discount code [A-Z]{7,8} [0-9]{3,4}"
              maxLength={12}
              register={register('discountCode', {
                pattern: {
                  value: discountCodePattern,
                  message: 'Invalid format!',
                },
              })}
              error={errors.discountCode}
            />
            <Button title="Generate" onClick={generateCode} />
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <Textarea
              label="Notes"
              value={notes}
              onChange={handleTextareaOnChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardSettings;
