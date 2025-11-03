function capital(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toLowerCase)
}
