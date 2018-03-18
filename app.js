var mqtt=require('mqtt');
var client  = mqtt.connect('mqtt://192.168.0.3');
client.on('connect',function()
{
client.subscribe('nonmasterd30');
client.subscribe('nonmasterd31');
});


client.on('message', function (topic, message) {
 
//  console.log(message.toString());
//console.log("tarun bhavana");
if(topic=="nonmasterd30")
{
console.log("latitude ="+ " "+message.toString());
}
if(topic=="nonmasterd31")
{
console.log("Longitude="+" "+message.toString());
}
});


