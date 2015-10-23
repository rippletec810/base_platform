(function() {
	'use strict';

	angular
		.module('app.services')
		.factory('userResourceApi', userResourceApiFn)
		.factory('adminResourceApi',adminResourceApiFn)
		.factory('schoolResourceApi',schoolResourceApiFn)
		.factory('teamResourceApi',teamResourceApiFn);
 		teamResourceApiFn.$inject = ['$resource'];
 		schoolResourceApiFn.$inject = ['$resource'];
 		userResourceApiFn.$inject = ['$resource'];
 		adminResourceApiFn.$inject=['$resource'];
		//--用户权限--
		function userResourceApiFn($resource) {
		    return $resource('/user/:user/:param/:operate', {}, {
		    	//--登录--
		      	login: {method:'POST', params:{operate:'login'}},
		      	//--退出登录--
		      	logout:{method:'POST',params:{operate:'logout'}},
		      	//--获取团队成员列表--
		      	TeamWorkerQuery:{method:'POST',params:{param:'member',user:'team',operate:'list'}},
   
		    });
		}
		//--基地管理员权限
		function adminResourceApiFn($resource){
			return $resource('/admin/:user/:param/:operate/:others', {}, {
				//--获取版块列表（管理员）-- 
		      	ModuleQuery:{method:'POST',params:{user:'community',param:'section',operate:'list'}},
		    	//--获取管理员列表--
		      	AdminList: {method:'POST', params:{user:'admin',operate:'list'}},
		      	//--添加二级管理员--
		      	AddAdmin: {method:'POST', params:{user:'admin',operate:'add'}},
		      	//--删除二级管理员--
		      	RemoveAdmin: {method:'POST', params:{user:'admin',operate:'delete'}},
		      	//--获取基地用户列表--
		      	TeamMemberListQuery: {method:'POST', params:{user:'team',param:'member',operate:'list'}},
		      	//--获取创建新团队的申请列表--
		      	CreateTeamApplyQuery:{method:'POST',params:{user:'team',param:'apply',operate:'list'}},
		      	//--通过团队审核--				
		      	PassTeamApply:{method:'POST',params:{user:'team',param:'apply',operate:'approve'}},				
		      	//--否决团队审核--
		      	RejectTeamApply:{method:'POST',params:{user:'team',param:'apply',operate:'decline'}},				
		      	//--获取团体审核材料--
		      	TeamApplyDetailQuery:{method:'POST',params:{user:'team',param:'apply',operate:'detail',others:'get'}},
		      	//--团队入驻情况编辑--
		      	TeamSettleEdit:{method:'POST',params:{user:'team',param:'settle',operate:'edit'}},
		      	//--获取团队列表（管理员）--
		      	TeamListQuery:{method:'POST',params:{user:'team',operate:'list'}},
		      	//--获取基地通知的列表，支持分批加载-- 
		      	BaseInfoQuery: {method:'POST', params:{user:'info',param:'notice',operate:'list'}},
		      	//--获取活动展示的列表，支持分批加载--
		      	BaseActivityQuery: {method:'POST', params:{user:'info',param:'notice',operate:'list'}},
		      	//--获取比赛事项的列表，支持分批加载--
		      	BaseGameQuery: {method:'POST', params:{user:'info',param:'notice',operate:'list'}},
		      	//--添加商品--
		      	AddGoods: {method:'POST', params:{user:'goods',operate:'add'}},
		      	//--删除商品--
		      	DelectGoods: {method:'POST', params:{user:'goods',operate:'delete'}},
		      	//--编辑商品--				
		      	EditGoods: {method:'POST', params:{user:'goods',operate:'edit'}},		      	
		      	//--删除团队--
		      	RemoveTeam:{method:'POST',params:{user:'team',operate:'delete'}}
		    });
		}
		//--团队权限--
		function teamResourceApiFn($resource){
			return $resource('/team/:user/:param/:operate', {}, {
		    	//--编辑团队资料--
		      	UpdateIntroduce: {method:'POST', params:{param:'detail',operate:'edit'}},
		      	//--团队申请中心--
		      	ApplyForThing: {method:'POST', params:{user:'room',param:'apply',operate:'add'}},
		      	//--添加招聘--
		      	AddRecruit: {method:'POST', params:{param:'recruit',operate:'add'}},
		      	//--修改招聘--
		      	EditRecruit: {method:'POST', params:{param:'recruit',operate:'edit'}},
		      	//--删除招聘--
		      	DelectRecruit: {method:'POST', params:{param:'recruit',operate:'delete'}},
		      	//--查询招聘--
		      	RecruitQuery: {method:'POST', params:{param:'recruit',operate:'list'}},
		      	//--获取团队应聘申请列表--
		      	JoinerQuery: {method:'POST', params:{user:'recruit',param:'request',operate:'list'}},
		      	//--给某个团队扣钱--
		      	DecreaseAccount: {method:'POST', params:{user:'account',param:'decrease'}},
		      	//--给某个团队加钱--
		      	IncreaseAccount: {method:'POST', params:{user:'account',param:'increase'}},
		      	//--获取团队钱包列表信息--
		      	AccountQuery: {method:'POST', params:{param:'account',operate:'list'}}
 
		    });
		}
		//--公共权限--
		function schoolResourceApiFn($resource){
			return $resource('/:user/:param/:operate/:others', {}, {
				//--申请物资列表--
				ApplyThingList:{method:'POST',params:{user:'room',param:'apply',operate:'list'}},	
				//--团队LOGO--			
				TeamLogo:{method:'POST',params:{user:'base',param:'team',operate:'logo',others:'get'}},				
				//--团队介绍--
				TeamDetailGet:{method:'POST',params:{user:'base',param:'team',operate:'detail',others:'get'}},				
				//--获取招聘详情--
				GetRecruitDetail:{method:'POST',params:{user:'base',param:'recruit',operate:'detail',others:'get'}},				
				//--通过物资申请--
				PassThingApply:{method:'POST',params:{user:'room',param:'apply',operate:'approve'}},				
				//--否决物资申请--
				RejectThingApply:{method:'POST',params:{user:'room',param:'apply',operate:'decline'}},				
				//--获取活动报名EXCEL--
				DownloadActivityExcel:{method:'POST',params:{user:'activity',param:'apply',operate:'excel',others:'get'}},
				//--修改密码--
				ChangeUserPassword:{method:'POST',params:{user:'user',param:'password',operate:'change'}},
				//--获取用户信息--
				GetUserInfo:{method:'POST',params:{user:'user',param:'info',operate:'get'}},
				//--修改用户信息--
				SetUserInfo:{method:'POST',params:{user:'user',param:'info',operate:'set'}},
				//--添加模块--
				ModuleAdd:{method:'POST',params:{user:'community',param:'section',operate:'add'}},
				//--删除模块--
				ModuleDelect:{method:'POST',params:{user:'community',param:'section',operate:'delete'}},
				//--模块编辑--
				ModuleEdit:{method:'POST',params:{user:'community',param:'section',operate:'edit'}},
		    	//--获取学院列表--
		      	CollegeQuery: {method:'POST', params:{user:'school',param:'name',operate:'list'}},
		      	//--获取专业列表--
		      	MajorQuery: {method:'POST', params:{user:'major',param:'name',operate:'list'}},
		      	//--获取学院专业级联--
		      	CollegeMajorQuery: {method:'POST', params:{user:'school',param:'major',operate:'list'}},
		      	//--获取团队列表--
		      	TeamQuery: {method:'POST', params:{user:'team',param:'name',operate:'list'}},
		      	//--删除公告--
		      	DelectInfo: {method:'POST', params:{user:'info',param:'notice',operate:'delete'}},
		      	//--编辑基地介绍页面--/ base/description/get
		      	UpdateIntroduce: {method:'POST', params:{user:'base',param:'description',operate:'edit'}},
		      	//--获取基地介绍详情--
		      	IntroduceContentQuery: {method:'POST', params:{user:'base',param:'description',operate:'get'}},
		      	//--获取基地logo--
		      	IntroduceLogoQuery: {method:'GET', params:{user:'base',param:'logo',operate:'get'}},
		      	//--获取验证码--
		      	SendCode: {method:'POST', params:{user:'user',param:'verify',operate:'send'}},
		      	//--用户注册--
		      	Register: {method:'POST', params:{user:'user',param:'register'}},
		      	//--申请新团队--
		      	ApplyNewTeam: {method:'POST', params:{user:'team',param:'request',operate:'add'}},
		      	//--获取商品列表--
		      	GoodsQuery: {method:'POST', params:{user:'good',param:'info',operate:'list'}},
		      	//--发布新公告--
		      	BaseInfoAdd: {method:'POST', params:{user:'info',param:'notice',operate:'add'}}   
		    });
		}
})();