const Mask = {
    apply(input, func) {
        setTimeout(() => {
            input.value = Mask[func](input.value)
        }, 1)
    },
    formatPercentage(value) {
        value = value.replace(/\D/g, "")

        console.log('Funcionando?')
        return new Intl.NumberFormat({
            style: "percent",
            minimumIntegerDigits: 2
        }).format(value)
    },
    formatCPF(value) {
        value = value.replace(/\D/g, "")

        console.log('Funcionando?')
        return new Intl.NumberFormat({
            style: "percent",
            minimumIntegerDigits: 2
        }).format(value)
    }
}

// Número percentual com no mínimo duas casas após a vírgula e no máximo 4

// caracteres > 2 && < 4