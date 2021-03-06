// 手机号码验证 email:true
// mobile:true
jQuery.validator.addMethod("mobile", function(value, element) {
    var length = value.length;
    var mobile =  /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(14[0-9]{1})|(18[0-9]{1}))+\d{8})$/
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "手机号码格式错误");


// 电话号码验证
jQuery.validator.addMethod("phone", function(value, element) {
    var tel = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;
    return this.optional(element) || (tel.test(value));
}, "电话号码格式错误");

jQuery.validator.addMethod("fax", function(value, element) {
    var tel =/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
    return this.optional(element) || (tel.test(value));
}, "传真号码格式错误");

// 邮政编码验证
jQuery.validator.addMethod("zipCode", function(value, element) {
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, "邮政编码格式错误");
// 邮政编码验证
jQuery.validator.addMethod("comparedate", function(value, element) {
   var now = new Date();
	var nowdata=now.getFullYear()+"-"+((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1)+"-"+(now.getDate()<10?"0":"")+now.getDate();
    return this.optional(element) || (value>nowdata);
}, "选择日期必须大于当前日期");

// QQ号码验证
jQuery.validator.addMethod("qq", function(value, element) {
    var tel = /^[1-9]\d{4,12}$/;
    return this.optional(element) || (tel.test(value));
}, "qq号码格式错误");


// IP地址验证
jQuery.validator.addMethod("ip", function(value, element) {
    var ip = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return this.optional(element) || (ip.test(value) && (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256));
}, "Ip地址格式错误");


// 字母和数字的验证
jQuery.validator.addMethod("chrnum", function(value, element) {
    var chrnum = /^([a-zA-Z0-9]+)$/;
    return this.optional(element) || (chrnum.test(value));
}, "只能输入数字和字母(字符A-Z, a-z, 0-9)");
// 字母和数字的验证
jQuery.validator.addMethod("chrnum1", function(value, element) {
    var chrnum = /^([a-zA-Z0-9_]+)$/;
    return this.optional(element) || (chrnum.test(value));
}, "只允许为字母、数字和下划线");


// 中文的验证
jQuery.validator.addMethod("chinese", function(value, element) {
    var chinese = /^[\u4e00-\u9fa5]+$/;
    return this.optional(element) || (chinese.test(value));
}, "只能输入中文");


// 下拉框验证
$.validator.addMethod("selectNone", function(value, element) {
    return value == "请选择";
}, "必须选择一项");



// 字节长度验证
jQuery.validator.addMethod("byteRangeLength", function(value, element, param) {
    var length = value.length;
    for (var i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 127) {
            length++;
        }
    }
    return this.optional(element) || (length >= param[0] && length <= param[1]);
}, $.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)"));



// 字符验证
jQuery.validator.addMethod("stringCheck", function(value, element) {
  return this.optional(element) || /^[\u0391-\uFFE5\w\-\(\)\（\）]+$/.test(value);
}, "只能包括中文字、英文字母、数字和下划线");

// 身份证号码验证
jQuery.validator.addMethod("isIdCardNo", function(value, element) {
  return this.optional(element) || /^\d{15}(\d{2}[A-Za-z0-9])?$/.test(value);
}, "请正确输入您的身份证号码");
// 身份证号码验证
jQuery.validator.addMethod("isIdCardNo1", function(value, element) {
  return this.optional(element) || /^\d{15}(\d{2}[A-Za-z0-9])?$/.test(value);
}, "请填写真实身份证号码");

// 手机号码验证
jQuery.validator.addMethod("isMobile", function(value, element) {
  var length = value.length;
  var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");

// 电话号码验证
jQuery.validator.addMethod("isTel", function(value, element) {
  var tel = /^\d{3,4}-?\d{7,9}$/; //电话号码格式010-12345678
  return this.optional(element) || (tel.test(value));
}, "请正确填写您的电话号码");

// 手机号码(手机/电话皆可)验证
jQuery.validator.addMethod("isPhone", function(value,element) {
  var length = value.length;
  var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  var tel = /^\d{3,4}-?\d{7,9}$/;
  return this.optional(element) || (tel.test(value) || mobile.test(value));

}, "请正确填写您的手机号码");

// 邮政编码验证
jQuery.validator.addMethod("isZipCode", function(value, element) {
  var tel = /^[0-9]{6}$/;
  return this.optional(element) || (tel.test(value));
}, "请正确填写您的邮政编码");

// 字符串长度验证
jQuery.validator.addMethod("textlength", function( value, element, param ) {
    var length = value.length;
    return this.optional(element) || ( length == param );
}, "字符串长度错误");


// 密码强度验证
jQuery.validator.addMethod("passwordstrong", function(value, element) {
    var len=value.length;
    if ( this.optional(element) ) {
        return "dependency-mismatch";
    }
    if(/^[a-zA-Z]*$/.test(value)){
        return false;
    }
    if(/^\d*$/.test(value)){
		
        return false;
    }
    if(/^([~!@#\$%\^&\*\(\)_\+=\-:;,\.<>\[\]\{\}]|[！#￥%……&*（）｛｝【】《》，。：；“‘])*$/i.test(value)){
	 
        return false;
    }
    return true;
  //return this.optional(element) || (tel.test(value));
}, "密码至少包含一位字母，数字和特殊字符");