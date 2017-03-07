/**
 * Created by Boaz on 06/03/2017.
 */
class FolderController {

    constructor(){
        this.item = 123;
        this.isOpen = false;
    }

    toggleFolder(){
        this.isOpen = !this.isOpen;
        this.fs.showContent(this.dir);
    }

    handleClick($event){
        if($event.which === 3){
            this.fs.openContextMenu($event.x + 3, $event.y + 3);
        }
    }
}

appModule.component("folder", {
    controller: FolderController,
    templateUrl: "folder.template.html",
    bindings:{
        dir: "<",
        fs: "<",
    }
});

