import groceryItems from '../data/groceryItems.json'

export default function addToBag(id) {
    let item = groceryItems.find((item) => {
        return item.id === id;   
    });
    return item
}