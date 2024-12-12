import { Button, Label, Fieldset, Input, Form, Titulo, ErrorMessage } from "../../components";
import { Controller, useForm } from "react-hook-form";
import InputMask from "../../components/InputMask";

interface FormInputTipos {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  senhaVerificada: string;
}

const CadastroPessoal = () => {
  const { register, watch, handleSubmit, control, formState: { errors } } = useForm<FormInputTipos>();

  const senha = watch("senha");
  const validaSenha = {
    obrigatorio: (val: string) =>
      !!val || "Por favor, insira a senha novamente",
    tamanhoMinimo: (val: string) =>
      val.length >= 6 || "A senha deve ter pelo menos 6 caracteres",
    senhaIguais: (val: string) => val === senha || "As senhas não correspondem",
  };

  const aoSubmeter = (dados: FormInputTipos) => {
    console.log(dados);
  };

  function validarEmail(valor: string) {
    const formatoEmail = /^[^\s@]+@alura\.com\.br$/;

    if (!formatoEmail.test(valor)) {
      console.error("Endereço de e-mail inválido para o domínio alura.com.br");
      return;
    }
    return true;
  }

  return (
    <>
      <Titulo>Insira alguns dados básicos:</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label htmlFor="campo-nome">Nome</Label>
          <Input
            id="campo-nome"
            placeholder="Digite seu nome completo"
            type="text"
            $error={!!errors.nome}
            {...register("nome", {
              required: "Campo de nome é obrigatório",
              minLength: { value: 5, message: "Minimo 5 caracteres" },
            })}
            aria-invalid={errors.nome ? true : false}
          />
          {
            errors.nome && (
              <ErrorMessage>{errors.nome.message}</ErrorMessage>
            )
          }
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-email">E-mail</Label>
          <Input
            id="campo-email"
            placeholder="Insira seu endereço de email"
            type="email"
            $error={!!errors.email}
            //...
            {...register("email", {
              required: "O campo de email é obrigatório ex: seuemail@teste.com.br",
              validate: validarEmail,
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Fieldset>


        <Controller control={control} name="telefone" rules={{
          pattern: {
            value: /^\(\d{2, 3}\) \d{5}-\d{4}$/,
            message: "O telefone inserido está no formato incorreto",
          },
          required: "O campo telefone é obrigatório",
        }}
          render={({ field }) => (
            <Fieldset>
              <Label>Telefone</Label>
              <InputMask
                mask="(99) 99999-9999"
                placeholder="Ex: (DD) XXXXX-XXXX"
                $error={!!errors.telefone}
                onChange={field.onChange}
              />
              {errors.telefone && (
                <ErrorMessage>{errors.telefone.message}</ErrorMessage>
              )}
            </Fieldset>
          )}
        />
        {/* <Fieldset>
          <Label>Telefone</Label>
          <Input
            id="campo-telefone"
            type="text"
            placeholder="Ex: (DDD) XXXXX-XXXX"
            {...register("telefone", {
              pattern: {
                value: /^\(\d{2,3}\) \d{5}-\d{4}$/,
                message: "O telefone inserido está no formato incorreto",
              },
              required: "O campo telefone é obrigatório",
            })}
          />
          {errors.telefone && <ErrorMessage>{errors.telefone.message}</ErrorMessage>}
        </Fieldset> */}

        <Fieldset>
          <Label htmlFor="campo-senha">Crie uma senha</Label>
          <Input
            id="campo-senha"
            placeholder="Crie uma senha"
            type="password"
            {...register("senha", {
              required: "O campo de senha é obrigatório",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos seis caracteres",
              },
            })}
          />
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-senha-confirmacao">Repita a senha</Label>
          <Input
            id="campo-senha-confirmacao"
            placeholder="Repita a senha anterior"
            type="password"
            {...register("senhaVerificada", {
              required: "O campo de senha é obrigatório",
              validate: validaSenha,
            })}
          />
          {errors.senhaVerificada && <ErrorMessage>{errors.senhaVerificada.message}</ErrorMessage>}
        </Fieldset>
        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default CadastroPessoal;
