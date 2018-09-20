import * as CAT_IMAGE_IMP from '../cat_in_coffecup.jpg';
import * as COFFE_IMAGE from '../coffe_cat_art.jpg';

const PAGES = {
    ABOUT_PAGE: { name: 'ABOUT_PAGE', url: '/about' },
    BOOKING_PAGE: { name: 'BOOKING_PAGE', url: '/booking' },
    HOME_PAGE: { name: 'HOME_PAGE', url: '/homePage' }
};

const IMAGES = {
    CAT_COFFE_IMAGE: { name: 'CAT_COFFE_IMAGE', img: COFFE_IMAGE },
    CAT_IMAGE: { name: 'CAT_IMAGE', img: CAT_IMAGE_IMP }

};

// funci: ((e: React.MouseEvent<HTMLElement>) => void)[];
// funci: Array<((e: React.MouseEvent<HTMLElement>) => void)>;
// funci: Array<(<T>(arg1: T) => any)>;

export { PAGES, IMAGES };
