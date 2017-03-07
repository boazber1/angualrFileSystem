/**
 * Created by Boaz on 06/03/2017.
 */
class UIController {
    constructor(fileSystemService){
        this.fileSystem = fileSystemService;
    }

}

appModule.component("ui", {
    controller: UIController,
    templateUrl: "userinterface.template.html",
});

