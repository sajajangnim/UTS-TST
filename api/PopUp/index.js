module.exports = async function (context, req) {

    context.res = {
        
        body: {
            text: "Hello there,\nfirst name: spring\nlastname: day"
        }
    };
}