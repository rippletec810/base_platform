var view_name = 'record_list';
var record_list = [];

function appendListItem(data)
{
    var date = new Date(), currentDate = new Date();
    date.setTime(data.add_time * 1000);
    var time_str = null;
    function insertZeros(num)
    {
        if(num < 10)
            return '0' + num;
        else
            return num;
    }
    if(!(date.getFullYear() == currentDate.getFullYear() &&
        date.getMonth() == currentDate.getMonth() &&
        date.getDate() == currentDate.getDate()))
        time_str = date.getFullYear() + "." + insertZeros(date.getMonth() + 1) + '.' +
            insertZeros(date.getDate());
    else
        time_str = insertZeros(date.getHours()) + ':' + insertZeros(date.getMinutes()) + ':'+
            insertZeros(date.getSeconds());

    var time_tag = document.createElement('time');
    var amount_tag = document.createElement('span');
    var reason_tag = document.createElement('span');
    var li_tag = document.createElement('li');
    amount_tag.className = 'consumingMoney';
    reason_tag.className = 'consumingReason';
    li_tag.payment_id = data.payment_id;
    time_tag.innerHTML = time_str;
    reason_tag.innerHTML = data.reason;
    if(data.type == 0)
        amount_tag.innerHTML = '加钱:¥' + data.amount;
    else
        amount_tag.innerHTML = '扣除:¥' + data.amount;

    li_tag.appendChild(amount_tag);
    li_tag.appendChild(reason_tag);
    li_tag.appendChild(time_tag);
    document.getElementById('record_list').appendChild(li_tag);
    record_list.push(data);
}

var is_loading = false;
function getRecordList(is_refresh, recruit_count)
{
    if(!is_loading)
        is_loading = true;
    var data = {};
    if(is_refresh)
    {
        data.is_refresh = 1;
        var list = document.getElementById('record_list');
        while(list.children.length > 0)
            list.removeChild(list.children[0]);
        record_list = [];
    }
    else
    {
        data.is_refresh = 0;
        if(record_list.length == 0)
            return;
        else
            data.last_record_id = record_list[record_list.length - 1].payment_id;
    }
    data.record_count = 10;
    var url = '/user/account/record/list';

    $.ajax({
        url: url,
        data: data,
        dataType: 'json',
        type: "POST",
        success: function(data){
            if (data.status != 200)
            {
                console.log(data.status);
                is_loading = false;
                return;
            }
            data = data.data;
            $.each(data.record_list, function(){
                appendListItem(this);
            });
            document.getElementById('balance').innerHTML = '&#xe604; 余额 ' + data.balance + '元';
            is_loading = false;
        },
        error: function(){
            is_loading = false;
        }
    });
}

function showGoodsList()
{
    var list = document.getElementById('goods_list');
    while(list.children.length > 0)
        list.removeChild(list.children[0]);
    $.ajax({
        url: '/good/info/list',
        dataType: 'json',
        data: null,
        type: 'GET',
        success: function(data){
            if(data.status != 200)
            {
                console.log(data.status);
                return;
            }
            data = data.data;
            $.each(data, function(){
                var name_tag = document.createElement('span'),
                    price_tag = document.createElement('span'),
                    add_btn = document.createElement('button'),
                    minus_btn = document.createElement('button'),
                    li_tag = document.createElement('li'),
                    input_text = document.createElement('input');
                name_tag.className = 'consumption_title';
                price_tag.className = 'price';
                add_btn.className = 'add';
                minus_btn.className = 'min';
                input_text.className = 'text_box';
                input_text.type = 'text';
                input_text.value = 0;
                li_tag.good_id = this.good_id;
                name_tag.innerHTML = this.good_name;
                price_tag.innerHTML = this.price;
                add_btn.innerHTML = '+';
                minus_btn.innerHTML = '-';
                input_text.onblur = function(){
                    if(isNaN(parseInt(input_text.value)))
                        input_text.value = 0;
                    else
                        input_text.value = parseInt(input_text.value);
                    if(input_text.value <= 0)
                        input_text.value = 0;
                    showTotalPrice();
                };

                add_btn.onclick = function(){
                    input_text.value++;
                    showTotalPrice();
                };

                minus_btn.onclick = function(){
                    if(input_text.value > 0)
                    {
                        input_text.value--;
                        showTotalPrice();
                    }
                };
                li_tag.appendChild(name_tag);
                li_tag.appendChild(price_tag);
                li_tag.appendChild(add_btn);
                li_tag.appendChild(input_text);
                li_tag.appendChild(minus_btn);
                document.getElementById('goods_list').appendChild(li_tag);
            });
            showTotalPrice();
        }
    });
}

function showTotalPrice()
{
    var totalPrice = 0;
    var goods_list = document.getElementById('goods_list').getElementsByTagName('li');
    for(var i = 0; i < goods_list.length; i++)
    {
        var li_tag = goods_list[i];
        var price = parseFloat(li_tag.getElementsByClassName('price')[0].innerHTML);
        var count = li_tag.getElementsByTagName('input')[0].value;
        totalPrice += price * count;
    }
    document.getElementById('total').innerHTML = totalPrice;
}

function showRecordList()
{
    getRecordList(true, 10000);
}


function displaySelectedView()
{
    if(view_name == 'record_list')
    {
        showRecordList();
        document.getElementById('balance_footer').style.display = 'block';
    }
    else
    {
        showGoodsList();
        document.getElementById('balance_footer').style.display = 'none';
    }
}

window.onload=function(){
    //tab选项切换功能
	//获取鼠标点击的表情和要切换内容的元素
    var titles=document.getElementById('navTab').getElementsByTagName('li'),
        divs=document.getElementById('tabSection').getElementsByTagName('section');
    if(titles.length!=divs.length)
    	return;
    divs[1].style.display = 'none';
    displaySelectedView();
    for(var i=0;i<titles.length;i++)
    {
    	titles[i].id=i;
    	titles[i].onclick=function(){
            if(this.id == 0)
                view_name = 'record_list';
            else
                view_name = 'goods_list';
            //清楚所有li上的class
    		for(var j=0;j<titles.length;j++){
             titles[j].className='';
             divs[j].style.display='none';
    		}
            displaySelectedView();
    		//设置当前为高亮显示
    		this.className='navBeSelected';
    		divs[this.id].style.display='block';
    	}
    }
};

document.getElementById('purchase').onclick = function(){
    var goods_list = document.getElementById('goods_list').getElementsByTagName('li');
    var list = [];
    for(var i = 0; i < goods_list.length; i++)
    {
        var li_tag = goods_list[i];
        var count = li_tag.getElementsByTagName('input')[0].value;
        if(count > 0)
            list.push({goods_id: li_tag.good_id, count: count});
    }
    if(list.length == 0)
        return;

    var data = {goods_list: JSON.stringify(list)};
    $.ajax({
        url: '/user/goods/purchase',
        data: data,
        dataType: 'json',
        type: "POST",
        success: function(data){
            if (data.status != 200)
            {
                console.log(data.status);
                return;
            }
            showGoodsList();
        }
    });
};






        
             



