/**
 * Created by Boaz on 06/03/2017.
 */
class TreeController {

    constructor(fileSystemService){
        this.fileSystem = fileSystemService;
    }

}

appModule.component("tree", {
    controller: TreeController,
    templateUrl: "tree.template.html",
});
