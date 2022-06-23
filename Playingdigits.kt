import kotlin.math.pow
fun digPow(n: Int, p: Int) = n.toString().mapIndexed { i, c -> c.toString().toDouble().pow(p + i).toInt() }.sum().let { if (it % n == 0) it / n else -1 }

println(digPow(1))
