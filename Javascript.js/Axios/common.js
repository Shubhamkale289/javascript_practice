const specialSort = () => {
    console.log('I am responsible for sorting')
}
const specialSort2 = () => {
    console.log('I am sorting 2')
}

export default function iamDefailt() {
    console.log('i am default')
}

export {
    specialSort,
    specialSort2
}

export default {
    iamDefailt
}


