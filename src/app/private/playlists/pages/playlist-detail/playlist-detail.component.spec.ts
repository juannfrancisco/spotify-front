import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { PlaylistDetailComponent } from './playlist-detail.component';
import { PlaylistsService } from '../../services/playlists.service';
import { Playlist } from '../../models/playlist';

describe('PlaylistDetailComponent', () => {
  let component: PlaylistDetailComponent;
  let fixture: ComponentFixture<PlaylistDetailComponent>;
  let mockPlaylistsService: jasmine.SpyObj<PlaylistsService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;

  const mockPlaylist: Playlist = {
    id: 1,
    nombre: 'Test Playlist',
    fechaCreacion: new Date(),
    canciones: []
  };

  beforeEach(() => {
    const playlistsServiceSpy = jasmine.createSpyObj('PlaylistsService', ['getById', 'removeSongFromPlaylist']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    mockActivatedRoute = {
      params: of({ id: '1' })
    };

    TestBed.configureTestingModule({
      declarations: [PlaylistDetailComponent],
      providers: [
        { provide: PlaylistsService, useValue: playlistsServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    });

    fixture = TestBed.createComponent(PlaylistDetailComponent);
    component = fixture.componentInstance;
    mockPlaylistsService = TestBed.inject(PlaylistsService) as jasmine.SpyObj<PlaylistsService>;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load playlist on init', () => {
    mockPlaylistsService.getById.and.returnValue(of(mockPlaylist));
    
    component.ngOnInit();
    
    expect(mockPlaylistsService.getById).toHaveBeenCalledWith(1);
    expect(component.playlist).toEqual(mockPlaylist);
  });

  it('should navigate back to playlist list', () => {
    component.goBack();
    
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/maintainer/playlists/list']);
  });

  it('should format duration correctly', () => {
    const result = component.formatDuration(125);
    expect(result).toBe('2:05');
  });
});
