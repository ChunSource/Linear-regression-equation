
    var yy = 0
    var xx = 0
    var xy = 0
    var y_ = 0
    var y = 0
    var x_ = 0
    var x = 0

    var r2 = 0
    var b = 0
    var a = 0

    var one = this.data.xText
    var two = this.data.yText

    var arrayx = new Array(); //新建数组
    var arrayy = new Array();

    arrayx = one.split("\n") //将用户输入存到数组
    arrayy = two.split("\n")
    console.log("x " + arrayx)
    console.log("y " + arrayy)

    if (arrayx.length != arrayy.length) {
      return
    }
    var size = arrayx.length
    for (var i = 0; i < size; i++) {
      y += parseFloat(arrayy[i])
      x += parseFloat(arrayx[i])
      xx += parseFloat(arrayx[i]) * parseFloat(arrayx[i])
      yy += parseFloat(arrayy[i]) * parseFloat(arrayy[i])
      xy += parseFloat(arrayx[i]) * parseFloat(arrayy[i])
    }

    //平均值
    y_ = y / size
    x_ = x / size
    console.log("x_ " + x_)
    console.log("y_ " + y_)

    a = (size * xy - (x * y)) / (size * xx - (x * x))
    b = (y_ - (a * x_))

    console.log("y = " + a + "x " + b)

    var sst = 0
    var son = 0
    var mom = 0
    var mom_left = 0
    var mom_right = 0
    /*
    for (var i = 0; i < size; i++) {
    //  son += (parseFloat(arrayx[i]) * parseFloat(arrayy[i]) - (size * x_ * y_))

      mom_left += (parseFloat(arrayx[i]) * parseFloat(arrayx[i])) -(size*x_*x_)
      mom_right += (parseFloat(arrayy[i]) * parseFloat(arrayy[i])) - (size * y_ * y_)
    }
    */
    son = xy - (size * x_ * y_)
    mom_left = xx - size * x_ * x_
    mom_right = yy - size * y_ * y_
    console.log("left " + mom_left)
    console.log("right " + mom_right)
    var temp = mom_left * mom_right
    mom = Math.sqrt(temp)
    console.log("mom " + mom)
    //  sst = yy-(y*y/size)
    //  console.log("sst "+sst)

    r2 = (son / mom)
    console.log("r^2: " + r2)