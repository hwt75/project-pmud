
const upperCase = (name) => {
    return name.charAt(0).toUpperCase() + str.slice(1);
}

const lowerCase = (name) => {
    return name.charAt(0).toLowerCase() + str.slice(2);
}

const formatterPrice = (price) => {
    return price.toLocaleString("vi-VN") + " VND";
}

module.exports = {upperCase, lowerCase, formatterPrice};