import { useTranslations } from 'next-intl';
import { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLoginFormFieldsData } from 'root/features/auth-login-form/interfaces/auth-login-form.fields-data.interface';
import { loginFx } from 'root/features/auth-login-form/model';
import { Button } from 'root/shared/uikit/Button';
import { FormControl } from 'root/shared/uikit/FormControl';
import { Input } from 'root/shared/uikit/Input/Input';
import { Text } from 'root/shared/uikit/Text';

export const AuthLoginForm = memo(({}) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setFocus
  } = useForm<AuthLoginFormFieldsData>({
    shouldUseNativeValidation: true
  });
  const t = useTranslations();

  useEffect(() => {
    setFocus('login');
  }, []);
  return (
    <form
      className="w-screen h-screen flex justify-center items-center container mx-auto"
      onSubmit={handleSubmit(loginFx)}
    >
      <div className="w-full max-w-lg">
        <Text type="h1" spacingBottom>
          {t('AuthLoginForm.title')}
        </Text>
        <FormControl
          name="login"
          label={t('AuthLoginForm.fields.login.label')}
          error={errors.login && 'Invalid'}
        >
          <Input
            autoFocus
            placeholder={t('AuthLoginForm.fields.login.placeholder')}
            invalid={!!errors.login}
            {...register('login', {
              required: true,
              minLength: 3
            })}
          />
        </FormControl>
        <FormControl
          name="password"
          label={t('AuthLoginForm.fields.password.label')}
          error={errors.password && 'Invalid'}
        >
          <Input
            placeholder={t('AuthLoginForm.fields.password.placeholder')}
            type="password"
            invalid={!!errors.password}
            {...register('password', { required: true })}
          />
        </FormControl>
        <Button disabled={isSubmitting} loading={isSubmitting} type="submit">
          {t('AuthLoginForm.submit')}
        </Button>
      </div>
    </form>
  );
});

AuthLoginForm.displayName = 'AuthLoginForm';
