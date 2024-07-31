import { Input } from '@/components/input'
import { View, Text, StatusBar, Image } from 'react-native'

export default function Index() {
    return (
        <View className="flex-1 justify-center items-center ">
            <Image 
            source={require("@/assets/logo.png")} 
            className='h-8' 
            resizeMode='contain' />
            <Text className='text-zinc-400 font-regular text-center text-lg mt-3'>
                Convide seus amigos e planeje sua{"\n"}próxima viagem
            </Text>

            {/* <View>
                <Input >
                    <Input.Field  />
                </Input>
            </View> */}
        </View>
    )
}