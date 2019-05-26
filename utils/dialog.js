import {showMsg} from 'api.js'
export const dialog = {
    tips(code  = 200) {
    	let msg = message(code)
        wx.showToast({
            title: msg,
            icon: 'none',
            mask: true,
        })
    },
    loading(){
    	wx.showLoading({
    		// title:'加载中...',

    	})
    },
    hideLoading(){
    	wx.hideLoading()
    }
}
function message(code){
	return showMsg[code]
}