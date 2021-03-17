var weather = 'rainy'

switch(weather){
    case 'rainy':
        console.log('Remember to bring the umbrela');
        break;
        case 'sunny':
            console.log('Dress lightly');
            break;
            case 'cloudy':
            case 'windy':
            case 'partialy cloudy':

                console.log('Go outside');
                break;
            default:
                    console.log('Unknmown weather condition');
                    break;
}