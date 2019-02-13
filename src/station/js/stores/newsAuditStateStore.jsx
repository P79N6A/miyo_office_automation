/**
 * Created by zengruofan on 2019/2/7.
 */
import Reflux from "reflux";
import newsAuditStateAction from '../actions/newsAuditStateAction.jsx';

var newsAuditStateStore = Reflux.createStore({
    selectedNewsID: '',
    listenables: [newsAuditStateAction],
    onSelectAuditNews: function (newsID) {
        this.selectedNewsID = newsID;

        this.trigger(newsID);
    }
});

export default newsAuditStateStore;