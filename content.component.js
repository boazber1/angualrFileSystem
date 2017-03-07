/**
 * Created by Boaz on 06/03/2017.
 */
class ContentController {

    constructor(fileSystemService){
        this.fileSystem = fileSystemService;
    }


    handleClick($event){
        if($event.which === 3){
            this.fileSystem.openContextMenu($event.x + 3, $event.y + 3);
        }
    }

}


appModule.component("content", {
    controller: ContentController,
    templateUrl: "content.template.html",
});