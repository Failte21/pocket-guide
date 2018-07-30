import * as React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./style/header.css";

interface HeaderProps {
    title: string,
}

const Header:React.SFC<HeaderProps> = ({title}) => (
    <header className="text-centered header">
        <Card className={'header-card'}>
            <CardContent className={'header-card-content'}>
                <Typography variant="headline">{title}</Typography>
            </CardContent>
        </Card>
    </header>
);

export default Header;