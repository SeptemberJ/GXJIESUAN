var Url = 'http://39.106.121.17:8088/gxJK/'//'http://220.248.107.62:8086/gxJK/';

//时间格式化
var formatNumber = function(n) {
	n = n.toString()
	return n[1] ? n : '0' + n
};
var formatTimeYMD = function(date) {
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	var day = date.getDate()
	
	var hour = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()
	
	return [year, month, day].map(formatNumber).join('-')
};
var formatTimeAll = function(date) {
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	var day = date.getDate()
	
	var hour = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()
	
	return [year, month, day].map(formatNumber).join('-') + '/' + [hour, minute, second].map(formatNumber).join(':')
}