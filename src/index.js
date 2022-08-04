
// You should implement your task here.


//1)создаём пустой массив - в который по итогу будем всё записывать
//2)делаем цикл для перебора подмассивов
//3)делаем ещё цикл для перебора значений подмассивов
//4)эти значения добавляем через array.push в наш res массив из п.1

//тут нужно считывать змейкой!
//как вариант для нечётных строк вывод слева направо, 
//а для чётных справа налево(тупо цикл на понижение)
module.exports = function towelSort (matrix) {
    //п1
    let res = [];
    //в случае если параметр пустой или матрица пустая вернуть сразу []
    if (matrix) {
        //п2
        for(let i = 0; i < matrix.length; i++) {
            let tempArr = matrix[i];
            //п3
            //тут введём проверку на чётность строки 
            if (i % 2 == 0) {
                for(let j = 0; j < tempArr.length; j++) {
                    res.push(tempArr[j]);
                }
            } else {
                for(let j = 0; j < tempArr.length; j++) {
                    res.push(tempArr[tempArr.length - j - 1]);
                }
            }
            
        }



    }
    

    return res;
}
