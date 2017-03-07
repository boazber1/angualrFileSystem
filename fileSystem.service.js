/**
 * Created by Boaz on 06/03/2017.
 */
class FileSystemService {


    constructor() {
        this.isContextmenu = false;
        this.posX = '';
        this.posY = '';

        this.item = {children: []};
        this.root = {
            id: 1, name: 'root', isDirectory: true, children: [
                {
                    id: 2, name: 'sub1', isDirectory: true, children: [
                    { id: 4, name: 'sub3', isDirectory: true, children: [] },
                    { id: 5, name: 'file1', isDirectory: false, content: 'text' },
                ]
                },
                { id: 3, name: 'sub2', isDirectory: true,  children: [] },
            ]
        };


    }

    getRoot(){
        return this.root;
    }

    showContent(item){
        this.item = item;
    }

    closeContextMenu(){
        this.isContextmenu = false;
    }

    openContextMenu(posX, posY){
        this.isContextmenu = true;
        this.posX = posX+ 'px';
        this.posY = posY+ 'px';

    }
}

appModule.service("fileSystemService", FileSystemService);