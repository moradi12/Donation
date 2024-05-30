import "./SmallDonation.css";

export function SmallDonation(): JSX.Element {
    return (
        <div className="SmallDonation">
            <div className="Box"></div>
            <input type="number" placeholder="Enter  Amount" />
            <input type="button" value="Search" />
        </div>
    );
}
