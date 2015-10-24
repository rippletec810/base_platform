var loading = false;
var flow_list = [];

function appendFlowItem(data)
{
}

function getNewFlowList(is_refresh, flow_count)
{
    if(loading)
        return;
    loading = true;
    var data = {};
    if (is_refresh)
    {
        data.is_refresh = 1;
        flow_list = [];
        var list = document.getElementById('flow_list');
        while (list.children.length > 0)
            list.removeChild(list.children[0]);
    }
    else {
        data.is_refresh = 0;
        if (flow_list.length == 0)
            return;
        else
            data.last_flow_id = flow_list[flow_list.length - 1].flow_id;
    }
    data.flow_count = flow_count;

    $.ajax({
        url: '/user/team/flow/list',
        data: data,
        dataType: 'json',
        type: 'POST',
        success: function (data) {

            if (data.status != 200) {
                console.log(data.status);
                loading = false;
                return;
            }
            data = data.data;
            $.each(data, function (){
                appendFlowItem(this);
            });
            loading = false;
        }
    });
}

window.onload = function(){
    getNewFlowList(true, 10);
};