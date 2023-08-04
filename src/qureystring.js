export const parse = (qureystring) => 
    // '?name=roto&position=bassist'
    // &로 쪼갬
    // key=value의 조합을 object의 형태로 만듦
    // 만들어진 것을 리턴

    // 루프 돌면서 querystrings에 키와 값 추가
    qureystring.split('&').reduce((acc, keyAndValue) => {
        const [key, value] = keyAndValue.split('=')
        if (key && value) {
            acc[key] = value
        }
        return acc
    }, {})