function AboutTab(parent)
{
	//Parent
	if(parent === undefined)
	{
		this.parent = document.body;
	}
	else
	{
		this.parent = parent;
	}
	
	//ID
	var id = "about" + AboutTab.id;
	AboutTab.id++;

	//Create element
	this.element = document.createElement("div");
	this.element.id = id;
	this.element.style.position = "absolute";
	this.element.className = "bar";

	//Prevent Drop event
	this.element.ondrop = function(event)
	{
		event.preventDefault();
	};

	//Prevent deafault when object dragged over
	this.element.ondragover = function(event)
	{
		event.preventDefault();
	};

	//Logo
	this.logo = new Image(this.element);
	this.logo.setImage("editor/files/logo.png");
	this.logo.size.set(390, 65);
	this.logo.updateInterface();

	//Version info
	this.name = new Text(this.element);
	this.name.size.set(400, 0);
	this.name.setTextSize(30);
	this.name.setText(Editor.NAME + " " + Editor.VERSION);
	this.name.updateInterface();

	//Build info
	this.timestamp = new Text(this.element);
	this.timestamp.size.set(400, 0);
	this.timestamp.setTextSize(20);
	this.timestamp.setText("Build " + Editor.TIMESTAMP);
	this.timestamp.updateInterface();

	//ThreeJS Version
	this.threejs = new Text(this.element);
	this.threejs.size.set(400, 0);
	this.threejs.setTextSize(15);
	this.threejs.setText("THREEJS R" + THREE.REVISION);
	
	this.threejs.updateInterface();

	//NWJS Version
	this.nwjs = new Text(this.element);
	this.nwjs.size.set(400, 0);
	this.nwjs.setTextSize(15);
	this.nwjs.setText("NWJS V" + process.versions['node-webkit']);
	this.nwjs.updateInterface();

	//Build info
	this.builton = new Text(this.element);
	this.builton.setText("Built on");
	this.builton.size.set(400, 0);
	this.builton.setTextSize(20);
	this.builton.updateInterface();

	//Made with
	this.madewith = new Image(this.element);
	this.madewith.setImage("editor/files/logo/madewith.png");
	this.madewith.size.set(540, 60);
	this.madewith.position.set(0, 0);
	this.madewith.updateInterface();

	//Element atributes
	this.fit_parent = false;
	this.size = new THREE.Vector2(0,0);
	this.position = new THREE.Vector2(0,0);
	this.visible = true;
	
	//Add element to document
	this.parent.appendChild(this.element);
}

//AboutTab counter
AboutTab.id = 0;

//Functions Prototype
AboutTab.prototype.update = update;
AboutTab.prototype.updateInterface = updateInterface;
AboutTab.prototype.destroy = destroy;
AboutTab.prototype.activate = activate;
AboutTab.prototype.updateContainerMetaData = updateContainerMetaData;

//Update container object data
function updateContainerMetaData(container){}

//Activate
function activate()
{
	Editor.setState(Editor.STATE_IDLE);
	Editor.resetEditingFlags();
}

//Remove element
function destroy()
{
	try
	{
		this.parent.removeChild(this.element);
	}
	catch(e){}
}

//Update tab
function update(){}

//Update division Size
function updateInterface()
{
	//Fit parent
	if(this.fit_parent)
	{
		this.size.x = this.parent.offsetWidth;
		this.size.y = this.parent.offsetHeight; 
	}
	
	//Set visibility
	if(this.visible)
	{
		this.element.style.visibility = "visible";
	}
	else
	{
		this.element.style.visibility = "hidden";
	}
	
	//Update about elements
	this.logo.visible = this.visible;
	this.logo.position.set((this.size.x-this.logo.size.x)/2, (this.size.y*0.5-this.logo.size.y)/2);
	this.logo.updateInterface();

	this.name.visible = this.visible;
	this.name.position.set((this.size.x-this.name.size.x)/2, this.logo.position.y + 80);
	this.name.updateInterface();

	this.timestamp.visible = this.visible;
	this.timestamp.position.set((this.size.x-this.timestamp.size.x)/2, this.name.position.y + 30);
	this.timestamp.updateInterface();

	this.threejs.visible = this.visible;
	this.threejs.position.set((this.size.x-this.threejs.size.x)/2, this.timestamp.position.y + 25);
	this.threejs.updateInterface();

	this.nwjs.visible = this.visible;
	this.nwjs.position.set((this.size.x-this.nwjs.size.x)/2, this.threejs.position.y + 25);
	this.nwjs.updateInterface();

	this.builton.visible = this.visible;
	this.builton.position.set((this.size.x-this.builton.size.x)/2, this.size.y - 90);
	this.builton.updateInterface();

	this.madewith.visible = this.visible;
	this.madewith.position.set((this.size.x-this.madewith.size.x)/2, this.size.y - 75);
	this.madewith.updateInterface();

	//Update base element
	this.element.style.top = this.position.y + "px";
	this.element.style.left = this.position.x + "px";
	this.element.style.width = this.size.x + "px";
	this.element.style.height = this.size.y + "px";
}