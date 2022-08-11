package main

func Grow(arr []int) int {
	result := 1

	for _, n := range arr {
		result *= n
}
	return result
}

func main() {
	println(Grow([]int{1, 2, 3, 4, 5, 6}) == 720)
	println(Grow([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}) == 3628800)
	println(Grow([]int{1, 2, 3, 4, 5},),120)
	println(Grow([]int{}) == 1)
}
