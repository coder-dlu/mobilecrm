import axios from 'axios'
const baseURL = "http://api.cm.onexus.net/api/"
export const base_urlApi = 'http://api.cm.onexus.net'
export const authorize_username = 'Ds7C2xG+BVHPAvUON5VijQ=='
export const authorize_password = 'JDfmfXQvuqHrXBdUARcoLw=='
export const getListUsers = async () => {
    return await axios.get(`${baseURL}Group/GetAllCustomers`)
}
export const updateGroup = async (arr) => {
    return await axios.put(`${baseURL}Group/UpdateGroup`, {
        "id": arr.id,
        "GroupName": arr.groupName,
        "GroupDescription": arr.groupDesCription,
        "Method": arr.method,
        "MaKhach": arr.maKhach
    })
}
export const removeCustomerInGroup = async (arr) => {
    await axios.delete(`${baseURL}Group/DeleteCustomerInGroup?maKhach=${arr.maKhach}&groupId=${arr.id}`)
}

export const addCustomerIntoGroup = async (arr) => {
    try {
        await axios.post(`${baseURL}Group/InsertCustomerInGroup`, {
            "CustomerId": arr.customerId,
            "GroupId": arr.groupId,
        })
    } catch (error) {
        console.log(error)
    }
}
export const findCustomerInGroupByProp = async (data) => {
    return await axios.post(`${baseURL}Group/FindCustomerInGroupByProp`, {
        AtributeCustomer: data.atributeCustomer,
        ExpressionCustomer: data.expressionCustomer,
        ValueCustomer: data.valueCustomer,
    });
};
export const getProperities = async () => {
    return await axios.get(`${baseURL}Group/GetAllProperities`);
};
export const insertProperities = async (data) => {
    return await axios.post(`${baseURL}Group/InsertProperities`, {
        AtributeCustomer: data.atributeCustomer,
        ExpressionCustomer: data.expressionCustomer,
        ValueCustomer: data.valueCustomer,
    });
};
export const deleteProperities = async (id) => {
    return await axios.delete(`${baseURL}Group/DeleteProperities?id=${id}`,{
        auth: { username: authorize_username, password: authorize_password }
    });
};
export const getGroup = async (groupName) => {
    return await axios.get(`${baseURL}Group/GetGroup?groupName=${groupName}`,{
        auth: { username: authorize_username, password: authorize_password }
    })
}



export const updateAdCampaign = async (data) => {
    return await axios.put(`${baseURL}Group/UpdateAdCampaign`, {
        "id": data.id,
        "time": data.time,
        "groupIds": data.groupIds,
        "mode": data.mode,
        "content": data.content
    },{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const getListAdCampaign = async () => {
    return await axios.get('http://api.cm.onexus.net/api/CRM/ListCampaign', {
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const createAdcampaign = async (dataCreate) => {
    try {
        await axios.post(`http://api.cm.onexus.net/api/CRM/SaveCampaign`, {
            "name": dataCreate.name,
            "template": dataCreate.template,
            "channel": dataCreate.channel,
            "group": dataCreate.group,
            "sendTime": dataCreate.sendTime,
            "sendNow": dataCreate.sendNow
        },{
            auth: { username: authorize_username, password: authorize_password }
        })
    } catch (error) {
        console.log(error)
    }
}
export const sendMuiltibleChannel = async (id) => {
    return await axios.get(`${baseURL}Group/SendMessageToMultipleChannel?id=${id}`,{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const insertRecord = async (record) => {
    return await axios.post(`${baseURL}Group/InsertRecord`, {
        "UserName": record.UserName,
        "CreatedTime": record.CreatedTime,
        "EditingTime": record.EditingTime,
        "RecordName": record.RecordName
    },{
        auth: { username: authorize_username, password: authorize_password }
    })
}

export const getListGroups = async (data) => {
    return await axios.get(`http://api.cm.onexus.net/api/Group/GetAll`,{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const CreateGroup = async (formData) => {
    await axios.post("http://api.cm.onexus.net/api/Group/CreateGroup", formData, {
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const deleteGroup = async (id) => {
    await axios.delete(`http://api.cm.onexus.net/api/Group/DeleteGroup?groupId=${id}`,{
        auth: { username: authorize_username, password: authorize_password }
    });
}

export const getGroupDetail = async (id) => {
    return await axios.get(`http://api.cm.onexus.net/api/Group/GetGroupDetail?groupId=${id}`,{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const GetIncomTemplate = async (data) => {
    return await axios.get(`http://api.cm.onexus.net/api/CRM/GetIncomTemplate?channel=${data.channel}`)
}
export const GetConversations = async (status) => {
    console.log('status', status)
    return await axios.get(`http://api.cm.onexus.net/api/Chat/GetConversations?status=${status}`,{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const GetMessage = async (id) => {
    return await axios.get(`http://api.cm.onexus.net/api/Chat/GetMessages?conversationId=${id}`,{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const SendMessager = async (data) => {
    return await axios.post(`http://api.cm.onexus.net/api/Chat/SendMessage?conversationId=${data.id}&message_content=${data.content}`,{
        withCredentials: true,
        headers: '3KQNzcjHWjBZky688kR9J7w1'
    },{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const GetGroupsALL = async () => {
    return await axios.get('http://api.cm.onexus.net/api/Group/GetAll',{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const DeleteMessager = async (data) => {
    return await axios.delete(`http://api.cm.onexus.net/api/Chat/DeleteMessage?conversationId=${data.conversitonId}&messageId=${data.messageId}`,{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const GetTemplateByChannelLanguage = async (data) => {
    return await axios.get(`http://api.cm.onexus.net/api/CRM/GetTemplateByChannelLanguage?channel=${data.channel}&language=${data.language}`,{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const deleteAdCampaign = async (id) => {
    return await axios.delete(`http://api.cm.onexus.net/api/CRM/DeleteCampaign?CampaignId=${id}`,{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const GetChatByToken = async () => {
    return await axios.get('http://api.cm.onexus.net/api/Chat/GetChatToken',{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const deleteTemplate = async (id) => {
    return await axios.delete(`http://api.cm.onexus.net/api/CRM/DeleteTemplate?templateId=${id}`,{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const createTemplateMessage = async (dataCreate) => {
    try {
        await axios.post(`http://api.cm.onexus.net/api/CRM/SaveCampaign`, {
            "name": dataCreate.name,
            "template": dataCreate.subject,
            "message": dataCreate.message,
            "channel": dataCreate.channel,
            "language": dataCreate.language,
            "incomTemplateCode": dataCreate.incomTemplateCode,
            "paramConfigs": dataCreate.paramConfigs
        },{
            auth: { username: authorize_username, password: authorize_password }
        })
    } catch (error) {
        console.log(error)
    }
}
export const Get = async () => {
    return await axios.get('http://api.cm.onexus.net/api/Chat/GetChatToken',{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const SendMessageAttachFiles = async (dataApi) => {
    return axios.post(`http://api.cm.onexus.net/api/Chat/SendMessageAttachFiles?conversationId=${dataApi.id}`, dataApi.data, {
        withCredentials: true,
        headers: '3KQNzcjHWjBZky688kR9J7w1'
    },{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const getAdcampaignDetail = async (idDetail) => {
    return await axios.get(`http://api.cm.onexus.net/api/CRM/CampaignDetail?campaignId=${idDetail}`,{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const Contact = async (contactID) => {
    return await axios.post(`http://api.cm.onexus.net/api/Chat/Contact?contactId=${contactID}`,{
        withCredentials: true,
        headers: '3KQNzcjHWjBZky688kR9J7w1'
    },{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const GetListRating = async () => {
    return await axios.get('http://api.cm.onexus.net/api/CRM/ListRating',{
        auth: { username: authorize_username, password: authorize_password }
    })
}
export const CreateRating = async (data) => {
    return await axios.post('http://api.cm.onexus.net/api/CRM/Rating', data, {
        withCredentials: true,
        headers: '3KQNzcjHWjBZky688kR9J7w1'
    })
}