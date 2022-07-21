//icons
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon,
} from "@heroicons/react/outline";

//styles
const styles={
    button:"flex items-center space-x-2 hover:text-white",
    icon:"h-5 w-5",
    hr:"border-t-[0.1] border-gray-900",
    playlist:"curser-pointer hover:text-white",
}

//sidebar
export const SideBar=()=>{
    return <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
        <div className="space-y-4">
        <button className={styles.button}>
            <HomeIcon className={styles.icon}/>
            <p>Home</p>
        </button>
        <button className={styles.button}>
            <SearchIcon className={styles.icon}/>
            <p>Search</p>
        </button>
        <button className={styles.button}>
            <LibraryIcon className={styles.icon}/>
            <p>Your Library</p>
        </button>
        <hr className={styles.hr}/>
        
        <button className={styles.button}>
            <PlusCircleIcon className={styles.icon}/>
            <p>Create Playlist</p>
        </button>
        <button className={styles.button}>
            <HeartIcon className={styles.icon}/>
            <p>Liked Songs</p>
        </button>
        <button className={styles.button}>
            <RssIcon className={styles.icon}/>
            <p>Your Episodes</p>
        </button>
        <hr className={styles.hr}/>
        
        {/* playlist */}
        <p className={styles.playlist}>Playlist name...</p>
        <p className={styles.playlist}>Playlist name...</p>
        <p className={styles.playlist}>Playlist name...</p>
        <p className={styles.playlist}>Playlist name...</p>
        <p className={styles.playlist}>Playlist name...</p>
        <p className={styles.playlist}>Playlist name...</p>
        <p className={styles.playlist}>Playlist name...</p>
        <p className={styles.playlist}>Playlist name...</p>
        <p className={styles.playlist}>Playlist name...</p>
        <p className={styles.playlist}>Playlist name...</p>
        <p className={styles.playlist}>Playlist name...</p>

        </div>
    </div>
}