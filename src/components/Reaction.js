import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../redux/actions/reactionAction'
import { useState, useEffect } from 'react'
import { Image, Pressable, View, Text, StyleSheet } from 'react-native'

function Reaction(props) {
    let { activityId } = props
    const dispatch = useDispatch()
    const { getReactions, updateReaction } = reactionActions
    //const { id } = useSelector(state => state.signIn)
    const [refresh, setRefresh] = useState(true)
    const [reaction, setReaction] = useState({})
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODEzNzk1MzQzYTI3OGYxZmFkM2NjZSIsImlhdCI6MTY3MDUzNzkyNiwiZXhwIjoxNjcwNjI0MzI2fQ.khVpAd5of76Lg429wCTsfFkIPyV2kNu08eYaZx6b1Ws"
    
    let id = '63813795343a278f1fad3cce'
    //console.log("ID",id)

    useEffect(() => {
        reactions()
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])

    //console.log(reaction)

    async function reactions() {
        let res = await dispatch(getReactions({id: activityId, token: token}))
        setReaction(res.payload)
    }

    async function changeIcon(element) {
        let name
        let nameByTouch = element.target._internalFiberInstanceHandleDEV.memoizedProps.name
        //console.log("name", nameByTouch)
        reaction.data.map(item => {
            if (item.name === nameByTouch) {
                name = item.name
            }
        })

        let datos = {
            token: token,
            id: activityId,
            name: name,
        }
        try {
            let res = await dispatch(updateReaction(datos))
            //console.log(res)
            setRefresh(!refresh)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {
                reaction.success &&
                reaction.data.map(react => {
                    let userFound = react.userId.find(user => user._id === id)
                    return (
                            <View key={react.name} style={styles.generalCont}>
                                {
                                    userFound ? (
                                        <View style={styles.contReaction}>
                                            <View style={styles.iconReaction}>
                                                <Pressable  onPress={changeIcon}>
                                                    <Image name={react.name} style={{ width: '100%', height: '100%'}} source={{uri: react.icon}} />
                                                </Pressable>
                                            </View>
                                            <View>
                                                <Text style={styles.counterReaction} >{reaction.howManyReactions[react.name]}</Text>
                                            </View>
                                        </View>
                                    ) : (
                                        <View style={styles.contReaction}>
                                            <View style={styles.iconBackReaction}>
                                                <Pressable onPress={changeIcon}>
                                                    <Image name={react.name} style={{ width: '100%', height: '100%'}} source={{uri: react.iconBack}} />
                                                </Pressable>
                                            </View>
                                            <View>
                                                <Text style={styles.counterReaction}>{reaction.howManyReactions[react.name]}</Text>
                                            </View>
                                        </View>
                                    )
                                }
                            </View>
                    )
                })
            }
        </>
    )
}

export default Reaction

const styles = StyleSheet.create({
    generalCont: {
        width: 85,
    },
    contReaction: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        backgroundColor: '#fce8c9',
        height: 60,
    },
    iconReaction: {
        width: 30,
        height: 30,
    },
    iconBackReaction: {
        width: 30,
        height: 30,
    },
    counterReaction: {
        color: '#fed89f',
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: 'black',
    }
})