---
sidebar_label: 'Accessing your files using the Nextcloud Web interface'
sidebar_position: 2
---

# Accessing your files using the Nextcloud Web interface

You can access your Nextcloud files with the **Nextcloud Web interface** and `create`, `preview`, `edit`, `delete`, `share`, and `re-share` files. 

:::info Info
Your Nextcloud administrator has the option to disable these features, so if any of them are missing on your system ask your server administrator.
:::

<div align="center">
    <img src="/img/fichiers/nextcloud/users-files.png" alt="The Files view screen." />
</div>

## Tagging files

:::info Info
You can assign tags to files. To create tags, open a file to the **Details view**. Then type your tags.
:::

:::tip TIP
To enter more than one tag press the return key after creating each tag. All tags are system tags, and are shared by all users on your Nextcloud server.
:::

<div align="center">
    <img src="/img/fichiers/nextcloud/files_page-7.png" alt="Creating file tags." />
</div>

Then use the Tags filter on the left sidebar to filter files by tags :

<div align="center">
    <img src="/img/fichiers/nextcloud/files_page-8.png" alt="Viewing file tags." />
</div>

## Comments

:::info Info
Use the Details view to add and read comments on any file or folder.
:::
Comments are visible to everyone who has access to the file :

<div align="center">
    <img src="/img/fichiers/nextcloud/file_menu_comments_2.png" alt="Creating and viewing comments." />
</div>

## Video player

:::info Info
You can play videos in Nextcloud with the Video Player app by simply clicking on the file.
Video streaming by the native Nextcloud video player depends on your Web browser and the video format.
:::

:::caution Important
If your Nextcloud administrator has enabled video streaming, and it doesn’t work in your Web browser, it may be a browser issue. See [**supported multimedia formats in Web browsers**](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility).
:::

<div align="center">
    <img src="/img/fichiers/nextcloud/video_player_2.png" alt="Watching a movie." />
</div>

## File controls

:::info Info
Nextcloud can display thumbnail previews for image files, MP3 covers, and text files, if this enabled by your server administrator.
:::

Hover your cursor over a file or folder to expose the controls for the following operations :

### Favorites

> Click the star to the left of the file icon to mark it as a favorite :
    
<div align="center">
    <img src="/img/fichiers/nextcloud/files_page-1.png" alt="Marking Favorite files." />
</div>

> You can also quickly find all of your favorites with the Favorites filter on the left sidebar.

### Overflow Menu

>The Overflow menu (three dots) displays file details, and allows you to rename, download, or delete files :

<div align="center">
    <img src="/img/fichiers/nextcloud/files_page-3.png" alt="Overflow menu." />
</div>

> The Details view shows Activities, Sharing, and Versions information:

<div align="center">
    <img src="/img/fichiers/nextcloud/files_page-4.png" alt="Details screen." />
</div>

The **Settings** gear icon at the lower left allows you to show or hide hidden files in your Nextcloud Web interface. These are also called dotfiles, because they are prefixed with a dot, e.g. `.mailfile`. The dot tells your operating system to hide these files in your file browsers, unless you choose to display them. Usually these are configuration files, so having the option to hide them reduces clutter.

<div align="center">
    <img src="/img/fichiers/nextcloud/hidden_files.png" alt="Hiding or displaying hidden files." />
</div>

## Previewing files

:::info Info
You can display uncompressed text files, OpenDocument files, videos, and image files in the Nextcloud embedded viewers by clicking on the file name.
:::
 
There may be other file types you can preview if your Nextcloud administrator has enabled them. 

:::caution Important
If Nextcloud cannot display a file, it starts a download process and downloads the file to your computer.
:::

## Navigating inside your Nextcloud

Navigating through folders in Nextcloud is as simple as clicking on a folder to open it and using the back button on your browser to move to a previous level. Nextcloud also provides a navigation bar at the top of the Files field for quick navigation.

## Sharing status icons

:::info Info
Any folder that has been shared is marked with the `Shared` overlay icon.
:::

Public link shares are marked with a chain link. Unshared folders are not marked :

<div align="center">
    <img src="/img/fichiers/nextcloud/files_page-5.png" alt="Share status icons." />
</div>

## Creating or uploading files and directories

Upload or create new files or folders directly in a Nextcloud folder by clicking on the *New* button in the Files app :

<div align="center">
    <img src="/img/fichiers/nextcloud/files_page-6.png" alt="The New file/folder/upload menu." />
</div>

The *New* button provides the following options :

### Up arrow

> Upload files from your computer into Nextcloud. You can also upload files by dragging and dropping them from your file manager.

### Text file

> Creates a new text file and adds the file to your current folder.

### Folder

> Creates a new folder in the current folder.

## Selecting files or folders

:::info Info
You can select one or more files or folders by clicking on their checkboxes. To select all files in the current directory, click on the checkbox located at the top of the files listing.
:::

:::tip Tip
When you select multiple files, you can delete all of them, or download them as a ZIP file by using the `Delete` or `Download` buttons that appear at the top.
:::

:::note Note
If the `Download` button is not visible, the administrator has disabled this feature.
:::

## Filtering the files view

The left sidebar on the Files page contains several filters for quickly sorting and managing your files.

### All files

> The default view; displays all files that you have access to.

### Favorites

> Files or folders marked with the yellow star.

### Shared with you

> Displays all files shared with you by another user or group.

### Shared with others

> Displays all files that you have shared with other users or groups.

### Shared by link

> Displays all files that are shared by you via public link.

### External Storage (optional)

> Files that you have access to on external storage devices and services such as Amazon S3, SMB/CIFS, FTP…

## Moving files

You can move files and folders by dragging and dropping them into any directory.

## Creating or connecting to a Federation Share link

Federated Cloud Sharing allows you to mount file shares from remote Nextcloud servers, and manage them just like a local share. See [**Using Federation Shares**](https://docs.nextcloud.com/server/latest/user_manual/en/files/federated_cloud_sharing.html) to learn to how to create and connect to new Federated Cloud shares.