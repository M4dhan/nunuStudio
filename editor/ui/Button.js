function Button(parent)
{
	//Parent
	if(parent === undefined)
	{
		this.parent = null;
	}
	else
	{
		this.parent = parent;
	}

	//ID
	var id = "button" + Button.id;
	Button.id++;

	//Create element
	this.element = document.createElement("div");
	this.element.id = id;
	this.element.style.position = "absolute";
	this.element.className = "button";

	//Element atributes
	this.size = new THREE.Vector2(0,0);
	this.position = new THREE.Vector2(0,0);
	this.visible = true;
	
	//Button text and callback
	this.text = "text";
	this.callback = null;

	//Click event
	var self = this;
	this.element.onclick = function()
	{
		if(self.callback != null)
		{
			self.callback();
		}
	};

	//Mouse over and mouse out events
	this.element.onmouseover = function()
	{
		self.element.className = "button_over";
	};

	this.element.onmouseout = function()
	{
		self.element.className = "button";
	};

	//Update element
	this.updateInterface();

	//Add element to document
	document.body.appendChild(this.element);
}

//Button conter
Button.id = 0;

//Functions Prototype
Button.prototype.update = update;
Button.prototype.updateInterface = updateInterface;
Button.prototype.setCallback = setCallback;

//Update status
function update(){}

//Set button callback function
function setCallback(callback)
{
	this.callback = callback;
}

//Update Button Size
function updateInterface()
{
	if(this.visible)
	{
		this.element.style.visibility = "visible";
	}
	else
	{
		this.element.style.visibility = "hidden";
	}
	this.element.innerHTML = "<span>" + this.text + "</span>";
	this.element.style.top = this.position.y + "px";
	this.element.style.left = this.position.x + "px";
	this.element.style.width = this.size.x + "px";
	this.element.style.height = this.size.y + "px";
}