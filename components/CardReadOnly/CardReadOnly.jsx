import { useState } from 'react';

import Card from '../Card/Card';
import CardContent from '../CardContent/CardContent';
import CardImage from '../CardImage/CardImage';
import FolderStar from '../FolderStar/FolderStar';

import { dateChanged, diffDateDisplay } from '../../util/date';

export default function ReadOnlyCard({ id, url, image_source, alt, elapsedTime, description, created_at }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  created_at = dateChanged(created_at);
  elapsedTime = diffDateDisplay(created_at);
  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <FolderStar />
        <CardImage imageSource={image_source} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          created_at={created_at}
          isHovered={isHovered}
        />
      </Card>
    </a>
  );
}
