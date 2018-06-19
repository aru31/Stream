from channels.generic.websocket import AsyncWebsocketConsumer
import json

class StreamConsumer(AsyncWebsocketConsumer):
	async def connect(self):

		await self.channel_layer.group_add(
			"stream",
			self.channel_name			

		)
		await self.accept()

	async def disconnect(self, close_code):
		await self.channel_layer.group_discard(
			"stream",
			self.channel_name
		)

	async def receive(self, text_data):
		text_data_json = json.loads(text_data)
		url = text_data_json['url']
		message = text_data_json['message']

		await self.channel_layer.group_send(
			"stream",
			{
				'type': 'Web_stream',
				'url': url,
				'message': message,
			}
		)

	async def stream_details(self, event):
		url = event['url']
		message = event['message']

		await self.send(text_data=json.dumps({
				'url': url,
				'message': message,
		}))

