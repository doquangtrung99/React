import { Box } from "@chakra-ui/react";
import React from "react";



class TestPage extends React.Component {


    render() {
        const key = ['number1', 'number2', 'number3', 'number4', 'number5']
        let a = 0;
        const array = []

        const AddTo = () => {
            if (a < key.length) {
                array.push({
                    [key[a++]]: [{ name: 'Trung', age: '23' }, { name: 'Huy', age: '30' }]
                })
            }
        }

        return (
            <Box onClick={() => AddTo()}>
                Click me
            </Box>
        )
    }
}

export default TestPage