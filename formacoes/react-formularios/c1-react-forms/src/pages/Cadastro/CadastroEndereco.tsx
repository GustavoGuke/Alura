import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Titulo,
} from "../../components";

interface FormInputTipos {
  cep: string;
  rua: string;
  numeroRua: string;
  bairro: string;
  cidade: string;
  estado: string;
  localidade: string;
}

const CadastroEndereco = () => {
  const { register, 
    handleSubmit, 
    setError, 
    setValue, 
    watch, 
    formState: { errors } } = useForm<FormInputTipos>({
      mode: "all",
      defaultValues: {
        cep: "",
        rua: "",
        numeroRua: "",
        bairro: "",
        cidade: "",
        estado: "",
        localidade: "",
      }
    });
  const cepDigitado = watch("cep");
  const aoSubmeter = (dados: FormInputTipos) => {
    console.log(dados);
  };

  const fethEndereco = async (cep: string) => {
    if (!cep) {
      setError("cep", {
        type: "manual",
        message: "Cep inválido",
      });

      return;
    }

    try {
      const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (response.ok) {
        setValue("rua", data.logradouro);
        setValue("localidade", `${data.localidade}, ${data.uf}`);
        setValue("bairro", data.bairro);
      } else {
        throw new Error("Cep inválido");
      }
    } catch (error) {
      console.error(error)
    }
  };
  
  return (
    <>
      <Titulo>Agora, mais alguns dados sobre você:</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label htmlFor="campo-cep">CEP</Label>
          <Input 
            {...register("cep", { required: "Localidade obrigatória" })}
          $error={!!errors.cep}
          onBlur={() => fethEndereco(cepDigitado)}
          id="campo-cep" placeholder="Insira seu CEP" type="text" 
          />
          {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-rua">Rua</Label>
          <Input 
            {...register("rua", { required: "Localidade obrigatória" })}
            $error={!!errors.rua}
          id="campo-rua" placeholder="Rua Agarikov" type="text" />
          {errors.rua && <ErrorMessage>{errors.rua.message}</ErrorMessage>}
        </Fieldset>

        <FormContainer>
          <Fieldset>
            <Label htmlFor="campo-numero-rua">Número</Label>
            <Input 
              {...register("numeroRua", { required: "Localidade obrigatória" })}
            $error={!!errors.numeroRua}
            id="campo-numero-rua" placeholder="Ex: 1440" type="text" />
            {errors.numeroRua && <ErrorMessage>{errors.numeroRua.message}</ErrorMessage>}
          </Fieldset>
          <Fieldset>
            <Label htmlFor="campo-bairro">Bairro</Label>
            <Input 
              {...register("bairro", { required: "Localidade obrigatória" })}
            $error={!!errors.bairro}
            id="campo-bairro" placeholder="Vila Mariana" type="text" />
            {errors.bairro && <ErrorMessage>{errors.bairro.message}</ErrorMessage>}
          </Fieldset>
        </FormContainer>
        <Fieldset>
          <Label htmlFor="campo-localidade">Localidade</Label>
          <Input
            {...register("localidade", { required: "Localidade obrigatória" })}
            $error={!!errors.localidade}
            id="campo-localidade"
            placeholder="São Paulo, SP"
            type="text"
          />
          {errors.localidade && <ErrorMessage>{errors.localidade.message}</ErrorMessage>}
        </Fieldset>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};

export default CadastroEndereco;
