const Mask = {
    apply(input, func) {
        input.value = input.value.replace(/\D/g, '')
        setTimeout(() => {
            input.value = Mask[func](input.value)
        }, 1)
    },
    formatPercentage(value) {
        let divide = 10000

        const arr = value.split(',')

        if(arr[1]){
            const decimals = arr[1].split('%')[0].length
            console.log(value, decimals)

            if (decimals > 2)
                divide = Math.pow(10, decimals + 2)
        }

        value = value.replace(/\D/g, '')
        return new Intl.NumberFormat('pt-BR', {
            style: 'percent',
            minimumFractionDigits: 2,
            maximumFractionDigits: 4
        }).format(value/divide)
    },
    formatCPF(value) {
        value = value.replace(/\D/g,"")
        value = value.replace(/(\d{3})(\d)/,"$1.$2")
        value = value.replace(/(\d{3})(\d)/,"$1.$2")
        value = value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

        return value
    }
}