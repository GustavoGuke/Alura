import { TouchableOpacity, Text } from "react-native"
import style from './style'

export function BotaoProduto({onPress}) {
  return (
    <TouchableOpacity style={style.botao} onPress={onPress}>
          <Text style={style.text}>+</Text >
    </TouchableOpacity>
  )
}

