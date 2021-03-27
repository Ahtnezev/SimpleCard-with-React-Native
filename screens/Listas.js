import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { Card, FAB } from 'react-native-paper'

const Listas = () => {

    const data =[
        {id: 1, name: "Vanessa", position: "Desarrolladora Web"},
        {id: 2, name: "Vicente", position: "Sviluppatore Web"},
        {id: 3, name: "Botas", position: "Web Developer"},
        {id: 4, name: "Sony", position: "Teach lead"},
        {id: 5, name: "Vanessa", position: "Desarrolladora Web"},
        {id: 6, name: "Vicente", position: "Sviluppatore Web"},
        {id: 7, name: "Botas", position: "Web Developer"},
        {id: 8, name: "Sony", position: "Teach lead"},
    ]

    const renderList = ( (item) => {
        return(
        <View>
            <Card style={ styles.myCard }>
                <View style={ styles.myCardView }>
                    <Image
                        source={{ uri:'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGFuaW1hbHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                        style={ styles.myImage }
                    />
                    <View>
                        <Text style={ styles.vText }> { item.name } </Text>
                        <Text style={ styles.vText }> { item.position } </Text>
                    </View>
                </View>
            </Card>
        </View>
        )
    })

    return (
        <View>
            <Text style={{ color: '#FFF', fontSize: 20, textAlign: 'center' }}>Welcome to Vize</Text>
            <FlatList
                data={ data }
                renderItem={ ({ item }) => {
                    // console.log(item)
                    return renderList(item)
                }}
                keyExtractor={ item => `${item.id}` }

            />

            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{ colors: { accent: 'blue' } }}
                onPress={() => console.log('Pressed')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 30,
        right: -20,
        bottom: 0,
    },
    myCard: {
        margin: 5,
        padding: 17,
    },
    myCardView: {
        flexDirection: 'row',
        padding: 3,
    },
    myImage:{
        width: 90,
        height: 90,
        borderRadius: 50/2,
    },
    vText: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: '#292929',
        marginLeft: 10
    }
    })

export default Listas
